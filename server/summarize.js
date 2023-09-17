import { pipeline } from "@xenova/transformers"

import { summaryExample } from "./utils/summary.js"

export async function summarize(text) {
  try {
    //return summaryExample
    
    console.log("Realiazando o resumo...")

    const generator = await pipeline("Summarization", "Xenova/distilbart-cnn-12-6" )

    const output = await generator(text)

    console.log("Resumo concluido com sucesso!")
    return output[0].summary_text
  } catch (error) {
    console.log("Não foi possivel realizar o resumo", error)
    throw new Error(error)
  }
}