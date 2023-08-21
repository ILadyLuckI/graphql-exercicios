const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Bom dia!'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Daiana Koblitz',
            email: 'dai.koblitz@gmail.com',
            idade: 37,
            salario_real: 1234.56,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Picanha',
            preco: 50,
            desconto: 0.1 
        }
    },
    numerosMegaSena() {
        //return [6 , 13, 26, 34, 47, 58]
        const crescente = (a, b) => a - b
        return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)

    },
    usuarios() {
        return usuarios
    },
    //o primeiro parâmentro de uma query é sempre um objeto
    usuario(_, args) {
        const selecionados = usuarios.filter(u => u.id == args.id)
        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const selecionados = perfis.filter(p => p.id === id)
        return selecionados ? selecionados[0] : null
    }
}