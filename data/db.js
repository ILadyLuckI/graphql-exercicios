const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'admin' }
]

const usuarios = [{
    id: 1,
    nome: 'Daiana Koblitz',
    email: 'dai.koblitz@gmail.com',
    idade: 37,
    perfil_id: 2,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Izabella',
    email: 'iza.bella@umemail.com',
    idade: 33,
    perfil_id: 1,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Elenice',
    email: 'ele.nice@umemail.com',
    idade: 70,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis }