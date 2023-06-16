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
        <CustomButton clickHandler={async ()=>{
          axios.post('/api/articles',{task: 'test is sucess'}).then((res)=>{
            // console.log(res);
          }).catch(err => console.log(err))
        }}>Test </CustomButton>
        <Home />
      </Layout>
    </>
  );
}
