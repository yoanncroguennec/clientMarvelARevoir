import React from "react";
import { useRoutes } from "react-router-dom";
// LAYOUTS
import MainLayout from "../components/layouts/MainLayout";
// PAGES
import LandingPage from "../page/landingPage/LandingPage";
// SCREENS
import Api_Characters from "../screens/characters/Api_Characters";
import Api_Comics from "../screens/comics/Api_Comics";
// COMPONENTS COMMONS
import CardCharacter from "../components/common/card/CardCharacter";
import CardComic from "../components/common/card/CardComic";
// ROUTES
import ProtectedRoutes from "./Protected.Routes";

export default function AppRouter({ }) {

  let element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "apiCharacters", element:
              <ProtectedRoutes>
                <Api_Characters />
              </ProtectedRoutes>
        },
        { path: "apiComics", element:
              <ProtectedRoutes>
                <Api_Comics />
              </ProtectedRoutes>
        },
        { path: "cardComic:id", element:
              <ProtectedRoutes>
                <CardComic />
              </ProtectedRoutes>
        },
        { path: "cardCharacter/:id", element:
              <ProtectedRoutes>
                <CardCharacter />
              </ProtectedRoutes>
        }
      ]
    }
  ]);

  return element;
}
