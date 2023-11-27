import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const router = useRouter()

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
  
  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
    setIdsDasQuestoes(idsQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }
  
  function idProximaPergunta(){
    if(questao){
      const proximoIndice = idsDasQuestoes.indexOf(questao.id!) + 1
      return idsDasQuestoes[proximoIndice]
    }
  }

  function irPraProximoPasso() { 
    const proximoId = idProximaPergunta()
    proximoId ? irParaProximaPergunta(proximoId) : finalizar()
  }

  function irParaProximaPergunta(proximoId: number){
    carregarQuestao(proximoId)
  }

  function finalizar(){
    return router.push({
      pathname: '/Resultado',
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })

  }

  return (
    <Questionario
      questao={questao!}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  )
}
