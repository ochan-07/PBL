import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Heading, Box, Button, Text, Center, Container, Divider} from '@chakra-ui/react';

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Home() {
  return (
    <Container maxW="1000px" backgroundColor={"green.200"}>
      <Box p="5">
        <Head>
          <title>フランスの名所</title>
          <meta charSet="utf-8" />
        </Head>
        <Center p="5" borderWidth="1px" borderColor={"blue"} backgroundColor={"blue.200"} borderRadius={"10px"} classname={styles.header}>
          <Heading as='h1' size='4xl'>フランスの名所</Heading>
        </Center>
        <Box id="main" >
          <Box p="5">
            <Heading as='h2' size="xl">エッフェル塔</Heading>
            <Text>
              エッフェル塔は1889年、フランス革命100周年を記念してパリで開催された万国博覧会のときに、その会場のモニュメントとして建設された、
              地上300メートルの高さという当時の建造物では考えられなかった世界最高鉄塔であり、
              現在では、パリを代表するシンボルとなっていて、1991年には、この塔を含むパリのセーヌ川周辺は世界遺産として登録された。
            </Text>
            <Center>
              <Image
                src={"/エッフェル塔.png"}
                width={"800"}
                height={"524"}
              />
            </Center>
          </Box>
          <Divider orientation='horizontal' />
          <Box p="5">
            <Heading as='h2' size="xl">ルーブル美術館</Heading>
            <Text>
              ルーブル美術館はパリのほぼ中心、セーヌ川右岸に位置するルーブル宮殿に置かれているフランスの国立美術館であり、原始・東洋部門を除く西洋美術の全領域に及ぶ世界最大の美術館である。
              16世紀からコレクションが始まり、現在ではさまざまな美術品3万5,000点近くが、総面積6万600平方メートルの展示場所で公開されている。
            </Text>
            <Center>
              <Image
                src={"/ルーブル美術館.png"}
                width={"800"}
                height={"533"}
              />
            </Center>
          </Box>
          <Divider orientation='horizontal' />
          <Box p="5">
            <Heading as='h2' size="xl">オペラ・ガルニエ</Heading>
            <Text>
              オペラ・ガルニエはパリの中心にあるオペラ座でガルニエ宮とも呼ばれている。
              典型的なネオバロック様式の外観と内装を持った建物で、絢爛豪華な装飾に飾られており、
              当時斬新だった鉄素材を使用しているため、それまでの建築方法では不可能だった大規模な空間が実現している。
            </Text>
            <Center>
              <Image
                src={"/オペラガルニエ.png"}
                width={"800"}
                height={"450"}
              />
            </Center>
          </Box>
          <Divider orientation='horizontal' />
          <Box p="5">
            <Heading as='h2' size="xl">エトワール凱旋門</Heading>
            <Text>
              凱旋門は、軍事的勝利を讃え、その勝利をもたらした将軍や国家元首や軍隊が凱旋式を行う記念のために作られた門である。
              エトワール凱旋門はナポレオン・ボナパルトによって1836年にロシア･オーストリア連合軍との戦いである、アウステルリッツの戦いに勝利した記念に建設された。
            </Text>
            <Center>
              <Image
                src={"/凱旋門.png"}
                width={"800"}
                height={"532"}
              />
            </Center>
          </Box>
          <Divider orientation='horizontal' />
          <Box p="5">
            <Heading as='h2' size="xl">サクレクール寺院</Heading>
            <Text>
              サクレ・クール寺院は、フランスおよびフランス語圏に多く存在する教会堂で聖なる心臓を意味し、イエス・キリストの聖心に捧げられたことを意味する。
              とくに有名なものはパリのモンマルトルの丘にあるバジリカ聖堂で、日本では最も良く知られ、単にサクレ・クール寺院と呼ばれた時にはこれを指すことが多い。
              パリ市内を見晴らせる観光名所で、19世紀後半に構想された比較的新しいものであるにも関わらず、今やパリになくてはならない存在になっている。
            </Text>
            <Center>
              <Image
                src={"/サクレクール寺院.png"}
                width={"800"}
                height={"536"}
              />
            </Center>
          </Box>
          <Center>
            <Button colorScheme='teal' variant='outline' onClick={returnTop} color={"Black"} backgroundColor={"white"}>
              topに戻る
            </Button>
          </Center>
        </Box>
        <Divider orientation='horizontal' borderColor={"white"} />
        <Box p="2px">
          <Text>Copyright &copy; 2021 ziraiya&ochan. All Rights Reserved.</Text>
        </Box>
      </Box>
    </Container>
  )
}