import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />
      
      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {'Nesse vídeo Sweet Carol explica um pouco do seu trabalho com os vídeos de ASMR, o que significa essa técnica, os benefícios que ela pode trazer baseado em depoimentos e também aborda um pouco sobre barreiras do preconceito que a técnica enfrenta em alguns momentos, inclusive sobre a sexualização do ASMR e seu ponto de vista!'}
      />
      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      />
      <Carousel
        category = {dadosIniciais.categorias[1]}
      />
      <Carousel
        category = {dadosIniciais.categorias[2]}
      />
      <Carousel
        category = {dadosIniciais.categorias[3]}
      />
      <Footer></Footer>
    </div>
  )
}

export default Home;