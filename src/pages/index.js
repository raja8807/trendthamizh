import { Inter } from "next/font/google";
import Layout from "@/components/layout/layout";
import Home from "@/components/home/home";
import CustomButton from "@/components/ui/custom-button/custom-button";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
