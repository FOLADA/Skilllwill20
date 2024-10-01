import EditPage from "./Pages/EditPage";
import Header from "./Pages/Header.jsx";
import TODO from "./ToDo.jsx";

const router = [
  {
    element: <Header />,
    path: "/",
    children: [
      {
        element: <TODO />,
        index: true,
      },
      {
        element: <EditPage />,
        path: "edit",
      },
    ],
  },
];

export default router;