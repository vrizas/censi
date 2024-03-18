import { Box, Container, Grid, SliderValueLabelProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CensusData, CensusSource, getCensusData } from "../api/censusApi";
import { LineChart, PieChart } from "@mui/x-charts";
import Slider from "./styled/Slider";

const SliderValueLabel = ({ children }: SliderValueLabelProps) => {
    return <span className="valueLabel">{children}</span>;
}

const CencusSection = () => {
    const [data, setData] = useState<CensusData[]>([]);
    const [chartData, setChartData] = useState<CensusData[]>([]);
    const [censusSource, setCensusSource] = useState<CensusSource | null>(null);
    const [years, setYears] = useState<string[]>([]);
    const [yearRange, setYearRange] = useState<number[]>([]);

    const fetchData = async () => {
        try {
            const response = await getCensusData();
            setData(response.data);
            setChartData(response.data);
            setCensusSource(response.source?.[0]);
            setYears(response.data.map((censusItem) => censusItem.Year));
            setYearRange([Number(response.data[0].Year), Number(response.data[response.data.length - 1].Year)]);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    const onYearRangeChange = (_event: Event, newValue: number | number[]) => {
        const values: number[] = newValue as number[];
        setYearRange(values);
        const filteredData = data.filter((censusItem) => Number(censusItem.Year) >= values[0] && Number(censusItem.Year) <= values[1]);
        setChartData(filteredData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container sx={{ py: 14 }}>
            <Typography variant="h5" fontWeight={500} mb={1}>{censusSource?.annotations?.source_name}</Typography>
            <Typography>{censusSource?.annotations?.source_description}</Typography>
            <Box width={300}>
                <Typography fontWeight={500} mt={3} mb={1}>Year Filter</Typography>
                    <Slider
                        value={yearRange}
                        onChange={onYearRangeChange}
                        getAriaLabel={() => 'Year Filter'}
                        step={1}
                        marks
                        min={years.length ? Number(years[0]) : 0}
                        max={years.length ? Number(years[years.length - 1]) : 0}
                        slots={{ valueLabel: SliderValueLabel }}
                    />
            </Box>
            <Grid container spacing={2} mt={3} ml={0}>
                <Grid item lg={6}>
                    <LineChart
                        xAxis={[{ scaleType: 'point', data: chartData.map((censusItem) => censusItem.Year) }]}
                        series={[
                            {
                                data: chartData.map((censusItem) => censusItem.Population),
                            },
                        ]}
                        width={500}
                        height={400}
                    />
                </Grid>
                <Grid item lg={6}>
                    <PieChart
                        series={[
                            {
                                data: chartData.map((censusItem) => ({
                                    id: censusItem["ID Year"],
                                    value: censusItem.Population,
                                    label: censusItem.Year,
                                })),
                            },
                        ]}
                        width={500}
                        height={400}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default CencusSection;