import React from 'react'
import { Box, Typography, Stack } from '@pankod/refine-mui'
import ReactApexChart from 'react-apexcharts'
import { ArrowCircleUpRounded } from '@mui/icons-material';

import { TotalRevenueOptions, TotalRevenueSeries } from './charts.config';

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $ 125,000
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded
            sx={{
              fontSize: 25,
              color: '#00c853',
            }}
          />
          <Stack>
            <Typography fontSize={15} fontWeight={600} color="#00c853">
              12%
            </Typography>
            <Typography fontSize={12} fontWeight={600} color="#00c853">
              Since last month
            </Typography>

          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        options={TotalRevenueOptions}
        series={TotalRevenueSeries}
        type="bar"
        height={310}
      />
    </Box>
  )
}

export default TotalRevenue