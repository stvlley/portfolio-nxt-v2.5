import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class CustomDocument extends Document {
    render () {
        return <Html>
            <Head>
                <meta name='desciption' content='Stephen Talley Software Engineer Portfolio' />
                <meta property='keyword' content='Web Dev, Software Developer, Engineer, Coder, Coding, Tech, Blockchain, Crypto, Technology, Web Development, Application Development, AI, Machine Learning, Artificial Intelligence, Programmer, Computer Science Guy, CompSci, Code Monkey, Hacker, Front End Developer, Backend Developer, The best software engineer in the world, Blogger, Content Creator, Youtuber, Creator, Creative' />
            </Head>

            <body>
            <Main />
            </body>
            <NextScript />
        </Html>
    }
}