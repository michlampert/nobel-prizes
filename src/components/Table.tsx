'use client';

import { NobelPrize } from "@/utils/model";
import { formatDate, formatNumber } from "@/utils/utils";
import { Container } from "@mui/material";
import { GridColDef, GridValueFormatterParams, DataGrid } from "@mui/x-data-grid";

export default function Search(props: {nobelPrizes: NobelPrize[], lang: 'en' | 'no' | 'se'}) {

    const columns: GridColDef[] = [
        {
            field: 'awardYear',
            headerName: 'Award Year',
            flex: 1,
            disableColumnMenu: true,
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,
            disableColumnMenu: true,
        },
        {
            field: 'dateAwarded',
            headerName: 'Date Awarded',
            flex: 1,
            valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
                return formatDate(value)
            },
            disableColumnMenu: true,
        },
        {
            field: 'prizeAmount',
            headerName: 'Prize',
            flex: 1,
            valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
                return formatNumber(value)
            },
            disableColumnMenu: true,
        },
    ];

    const rows = props.nobelPrizes
        .map((np, id) => ({
            id,
            ...np,
            category: np.category[props.lang]
        }))

    return (
        <>
            <Container>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    hideFooterPagination={true}
                    hideFooter={true}
                />
            </Container>
        </>
    )
}