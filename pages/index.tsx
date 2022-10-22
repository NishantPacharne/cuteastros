import type { NextPage } from 'next'
import Image from 'next/image'
import { ConnectWallet, useContract, useUnclaimedNFTSupply, useClaimedNFTSupply, useContractMetadata, useAddress, useNetwork, useNetworkMismatch, useActiveClaimCondition } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'

type ChainProps = {
  activeChainId: number;
}

const Home = (props: ChainProps) => {
  // contract initialization.
  const contractAdress = "0x0eB896E118A2215Cc92c9B3b230fE6D2ff77BED4";
  const { contract: nftDrop} = useContract(contractAdress);
  
  // contract metadata and supply.
  const { data: contractMetadata } = useContractMetadata(nftDrop);
  const { data: claimedSupply } = useClaimedNFTSupply(nftDrop);
  const { data: unclaimedSupply } = useUnclaimedNFTSupply(nftDrop);
  const { data: activeClaimCondition } = useActiveClaimCondition(nftDrop);
  
  const maxClaim: string = activeClaimCondition?.quantityLimitPerTransaction !== undefined ? activeClaimCondition?.quantityLimitPerTransaction: '0';
  
  // to check if all nfts are sold out.
  const isSoldOut = unclaimedSupply?.toNumber() === 0;

  // the variable gets populated with the wallet address if connected
  const address = useAddress();

  // checks if the user is on an wrong network
  const isWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  // sucess and error messages
  const [succes, setSucces] = useState("");
  const [errormsg, setError] = useState("");

  const [isMinting, setIsMinting] = useState(false);

  useEffect(() => {
    console.log(maxClaim);
  }, [maxClaim])

  // the qty variable gets populated with the qty which user enters
  const [qty, setQty] = useState(1);



  // mint function
  const mint = async () => {
    setError('');
    setSucces('');

    if (!address){
      setError("Please connect your wallet.")
      return;
    }

    if (isWrongNetwork){
      switchNetwork && switchNetwork(props.activeChainId);
      return;
    }

    if (qty < 1){
      setError(`Min 1 required.`);
      return;
    }
    
    if (qty > Number(maxClaim)){
      setError(`Max ${maxClaim} allowed`);
      return;
    }

    setIsMinting(true);
    try {
      await nftDrop?.erc721.claim(qty);
      setIsMinting(false);
      setSucces('Mint successful 🥳');
      setQty(1);
    } catch (error: any) {
      // console.log(qty);
      setIsMinting(false);
      setQty(1);
      setError(error.reason);
  }

  }

  // to display the loader until the data is fetched
  if (!nftDrop || !contractMetadata){
    return (
      <div className="pre__loader w-full min-h-screen flex items-center justify-center">
        <div className='p-4 rounded-lg bg-[#ffffffd6]'>
          <span className="loader"></span>
        </div>
      </div>
    )
  }

  return (
    <>
        <div className='flex justify-center items-center'>

          <div className="mint__card w-[20rem] min-h-[25rem] rounded-lg p-4">
            <div className="card__top flex justify-between items-center">
              <h2 className='heading text-xl'> {contractMetadata.name} 🚀</h2>
              <span>{claimedSupply?.toNumber()}/{""}{(unclaimedSupply?.toNumber() || 0) + (claimedSupply?.toNumber() || 0)}</span>
            </div>
            <div className="card__img mt-3">
              <Image src="/card.png" alt="cuteastros" className='rounded-lg' layout='responsive' width='100%' height='100%' priority={true} placeholder="blur" />
            </div>
            <div className="card__btn mt-3">
              {address ? (
                <div className="mint__options flex justify-centre items-centre gap-x-2">
                  <input type="number" placeholder='QTY' name="qty" className="border text-sm rounded-md block w-[30%] h-full p-2.5 focus:outline-none focus:border-[#843cff] focus:ring-1 focus:ring-[#843cff]" disabled={isMinting} min="1" max={maxClaim} onChange={(e) => {setQty(Number(e.target.value))}} />

                  <button onClick={mint} disabled={isMinting} className='p-2 bg-[#843cff] rounded-md w-[70%] text-white heading'>{isMinting? 'Minting' : isWrongNetwork? 'Change network' : 'Mint 🚀'}</button>
                </div>
              ) : (<ConnectWallet accentColor="#843cff" colorMode='light'/>)}

              {/* {!address && (
                
              )} */}
              <span className="loader-mint"></span>
            </div>
          </div>
  
        </div>
        {succes? (
          <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg fixed bottom-0 right-4" role="alert">
            <span className="font-medium">{succes}</span>
          </div>
        ) 
        : 
        errormsg? (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg fixed bottom-0 right-4" role="alert">
            <span className="font-medium"> {errormsg} </span>
          </div>
        ) : <></>}
    </>
  )
}

export default Home
