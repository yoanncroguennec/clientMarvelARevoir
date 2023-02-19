import { Box, styled } from "@mui/material";

export const RootHome = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "80px",
    width: "100vw"
}));

export const RootOfferCard = styled(Box)(({ theme }) => ({
    alignItems: "center",
    background: "#DCDCDC",
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    borderRadius: "20px",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    flexShrink: "0",
    height: "600px",
    margin: "10px",
    overflow: "hidden",
    width: "300px",

    perspective: "800px",
    '&:hover': {
        cursor: "pointer !important",
        transform: "rotateY(180deg) !important",
    }
}));

export const CardContent = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    position: "relative",
    transition: "transform 1500ms",
    transformStyle: "preserve-3d",
}));

export const Front = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    borderRadius: "2rem",
    boxShadow: "0 0 5px 2px rgba(50, 50, 50, 0.25)",
    position: "absolute",
    backfaceVisibility: "hidden",

}));

export const Back = styled(Box)(({ theme }) => ({
    // height: "100%",
    // width: "100%",
    // borderRadius: "2rem",
    // boxShadow: "0 0 5px 2px rgba(50, 50, 50, 0.25)",
    // position: "absolute",
    // backfaceVisibility: "hidden",


    background: "#3a3a3a",
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5rem",
}));