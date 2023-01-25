import React, { useMemo } from 'react'
import styled from 'styled-components'
import Panel from '../Panel'
import { AutoColumn } from '../Column'
import { RowFixed } from '../Row'
import { TYPE } from '../../Theme'
import { usePairData } from '../../contexts/PairData'
import { formattedNum } from '../../utils'

const PriceCard = styled(Panel)`
  position: absolute;
  right: -220px;
  width: 220px;
  top: -20px;
  z-index: 9999;
  height: fit-content;
  background-color: ${({ theme }) => theme.bg1};
`

function formatPercent(rawPercent) {
  if (rawPercent < 0.01) {
    return '<1%'
  } else return parseFloat(rawPercent * 100).toFixed(0) + '%'
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function UniPrice() {
  const daiPair = usePairData('0x0af490e36c69534d83687636bfc52c726c3fdcf1')
  const usdcPair = usePairData('0xf30c0072dfa69aee9df375ef46b8e841530762e6')
  const usdtPair = usePairData('0xfdb4c8454d2a2b41ed8e2e64ad2d4764f60518db')

  // const totalLiquidity = useMemo(() => {
  //   return daiPair && usdcPair && usdtPair
  //     ? daiPair.trackedReserveUSD + usdcPair.trackedReserveUSD + usdtPair.trackedReserveUSD
  //     : 0
  // }, [daiPair, usdcPair, usdtPair])

  const daiPerEth = daiPair ? parseFloat(daiPair.token0Price).toFixed(2) : '-'
  const usdcPerEth = usdcPair ? parseFloat(usdcPair.token0Price).toFixed(2) : '-'
  const usdtPerEth = usdtPair ? parseFloat(usdtPair.token0Price).toFixed(2) : '-'

  return (
    <PriceCard>
      <AutoColumn gap="10px">
        <RowFixed>
          <TYPE.main>BUSD/BOMB: {formattedNum(daiPerEth, true)}</TYPE.main>
          {/* <TYPE.light style={{ marginLeft: '10px' }}>
            {daiPair && totalLiquidity ? formatPercent(daiPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light> */}
        </RowFixed>
        <RowFixed>
          <TYPE.main>USDC/BOMB: {formattedNum(usdcPerEth, true)}</TYPE.main>
          {/* <TYPE.light style={{ marginLeft: '10px' }}>
            {usdcPair && totalLiquidity ? formatPercent(usdcPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light> */}
        </RowFixed>
        <RowFixed>
          <TYPE.main>USDT/BOMB: {formattedNum(usdtPerEth, true)}</TYPE.main>
          {/* <TYPE.light style={{ marginLeft: '10px' }}>
            {usdtPair && totalLiquidity ? formatPercent(usdtPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light> */}
        </RowFixed>
      </AutoColumn>
    </PriceCard>
  )
}
