import React from 'react'

import { Box, Typography, Stack } from '@pankod/refine-mui'

import { propertyReferralsInfo } from 'constants/index'

interface ProgressBarProps {
  title: string
  percentage: number
  color: string
}

const ProgressBar = ({ title, percentage, color } : ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142d" >
        {percentage}%
      </Typography>
    </Stack>

    <Box position="relative" width="100%" height="8px" bgcolor="#e4e8ef" borderRadius={1} mt={2}>
      <Box
        width={`${percentage}%`}
        height="100%"
        bgcolor={color}
        borderRadius={1}
        position="absolute"
      />
    </Box>

  </Box>
)

const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Property Referrals
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((item) => 
          <ProgressBar key={item.title} {...item} />
        )}
      </Stack>

    </Box>
  )
}

export default PropertyReferrals