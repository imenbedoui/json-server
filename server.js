const http= require ('http')


const server = http.createServer((req,res)=>{
    res.write('hello\n')
    res.write('hello')
    res.write('hello')
    res.write('imen')
    res.write('hello\n')
    res.write('bedoui')

    res.end('done')
})

server.listen(5000,()=>{
    console.log('server runnung')
})