// import CustomButton from "@/components/ui/custom-button/custom-button";
// import CustomInput from "@/components/ui/form-elements/custom-input/custom-input";
// import CustomTextArea from "@/components/ui/form-elements/custom-text-area/custom-text-area";
// import PageHeading from "@/components/ui/page-heading/page_heading";
// import Link from "next/link";
// import { Col, Container, Row } from "react-bootstrap";
// import SOCIAL_MEDIA_LINKS from "@/helpers/social-media/social_media";

// const { default: Layout } = require("@/components/layout/layout");

// const ContactPage = () => {
//   return (
//     <Layout categoryName="home">
//       <PageHeading heading="Contact Us" />
//       <Container>
//         <Row>
//           <Col xs={12} lg={6} style={{ padding: "10px 20px" }}>
//             <h4 style={{ textAlign: "center", marginTop: "20px" }}>Mail Us</h4>
//             <Row>
//               <label>Your Name (required)</label>
//               <CustomInput placeHolder="Name..." />
//             </Row>
//             <br />
//             <Row>
//               <label>Your Email (required)</label>
//               <CustomInput placeHolder="Email..." />
//             </Row>
//             <br />
//             <Row>
//               <label> Subject</label>
//               <CustomInput placeHolder="Subject..." />
//             </Row>
//             <br />
//             <Row>
//               <label>Message (required)</label>
//               <CustomTextArea placeHolder="Message..." />
//             </Row>
//             <br />
//             <Row xs={4}>
//               <CustomButton>Send</CustomButton>
//             </Row>
//           </Col>
//           <Col xs={12} lg={6} style={{ padding: "10px 20px" }}>
//             <h4 style={{ textAlign: "center", marginTop: "20px" }}>
//               Follow Us
//             </h4>
//             <ul>
//               {SOCIAL_MEDIA_LINKS.map((link) => (
//                 <li key={link.id}>
//                   <Row>
//                     <Link href={link.link}>{link.name}</Link>
//                   </Row>
//                 </li>
//               ))}
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Layout>
//   );
// };

// export default ContactPage;

const ContactPage = () => <p>Contact</p>;

export default ContactPage;
