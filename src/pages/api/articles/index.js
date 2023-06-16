// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongoDB } from "@/libs/mongoConnect";
import Article from "@/models/ArticleModel";

export default async function handler(req, res) {

  if (req.method === "GET") {
    try {
      await connectMongoDB();
      const articles = await Article.find(req.query);
      res.status(200).send(articles);
    } catch (err) {
      res.status(500).send({ err: err });
    }
  }

  if (req.method === "POST") {
    
    const article = req.body;

    console.log(article);

    try {
      await connectMongoDB();
      Article.create(article).then((data) => {
        // console.log(data);
        res.status(201).send(data);
      });
    } catch (err) {
      // console.log(err);
      res.status(500).send({ err: err });
    }
  }
}
