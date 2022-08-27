// import React, { useContext } from "react";
// import { CardContent, Typography, SvgIcon } from "@mui/material";
// import MoneyOffCsredRoundedIcon from "@mui/icons-material/MoneyOffCsredRounded";
// import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
// import { MainContext } from "../context/context-main";

// const ListItemExpense = () => {
//   const { expenses } = useContext(MainContext);

//   return (
//     <>
//       {expenses.map((expense) => (
//         <CardContent
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: "1rem",
//             background: "#FF6461",
//             boxShadow: "1px 1px 4px rgba(0,0,0,0.3)",
//             borderBottom: "1.8px solid #DBF227 ",
//           }}
//         >
//           <Typography component="div" sx={{ justifySelf: "start" }}>
//             <SvgIcon
//               fontSize="large"
//               component={MoneyOffCsredRoundedIcon}
//               sx={{ color: "red" }}
//               inheritViewBox
//             />
//           </Typography>
//           <Typography color="text.secondary" sx={{ color: "#c1c1c1" }}>
//             <span className="span-list">- {expense.expenseAmount}</span>
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "1.5rem",
//               // textTransform: "uppercase",
//               fontWeight: "bold",
//               color: "#c1c1c1",
//               transform: "translateY(.4rem)",
//             }}
//             variant="h1"
//             color="text.secondary"
//             gutterBottom
//           >
//             {expense.expenseType}
//           </Typography>
//           <Typography color="text.secondary" sx={{ color: "#c1c1c1" }}>
//             {expense.date}
//           </Typography>
//           <Typography component="div">
//             <button className="btn-delete">
//               <SvgIcon
//                 fontSize="large"
//                 component={DeleteRoundedIcon}
//                 sx={{ color: "orange" }}
//                 inheritViewBox
//               />
//             </button>
//           </Typography>
//         </CardContent>
//       ))}
//     </>
//   );
// };

// export default ListItemExpense;
