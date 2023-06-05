// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongoDB } from "@/libs/mongoConnect";
// import Task from "@/models/TaskModel";
import Article from "@/models/ArticleModel";

export default async function handler(req, res) {
  // res.status(200).json({ name: process.env.MONGO_URI })
  // console.warn('okokokokokokokok---------------------');
  // console.log('reqqqqqqqqqqqqq--------->',req.query);

  //   console.log('reqqqqqqq--------',req.query.title);

  //   res.status(200).send({ data: "hiii" });

  if (req.method === "GET") {
    try {
      await connectMongoDB();
      // const x = await Article.find({cat})
      const articles = await Article.find({ _id: "647bb2b0274c4868becb7a3e" });
      res.status(200).send(articles);
    } catch (err) {
      // console.log(err);
      res.status(500).send({ err: err });
    }
  }
}
