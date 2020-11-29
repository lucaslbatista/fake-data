var casual = require('casual').pt_BR;

module.exports = () => {
    casual.define('endereco', function () {
        return {
            nomeBairro: casual.full_name,
            cep: casual.numerify('########'),
            estado: casual.state,
            cidade: casual.city,
            pais: casual.country
        }
    });


    casual.define('organizacao', function () {
        return {
            id: casual.integer(from = 0, to = 1000),
            nome: casual.title,
            sigla: casual.state_abbr,
            cdOrg: casual.numerify('#######'),
            email: casual.email,
            pabx: casual.numerify('(##) ####-####'),
            homepage: casual.url,
            extinta: casual.random_element(['N', 'N', 'N', 'S']),
            tipo: {
                descricao: casual.random_element(['SIGPES', 'EXTERNA'])
            },
        }
    });

    casual.define('pessoa', function (id) {
        return {
            id: id,
            nrCpf: casual.numerify('##########'),
            nome: casual.name,
            nomeGuerra: casual.first_name,
            dataNascimento: casual.date(format = 'YYYY-MM-DD'),
            dataPraca: casual.date(format = 'YYYY-MM-DD'),
            dataPromocaoAtual: casual.date(format = 'YYYY-MM-DD'),
            sexo: casual.random_element(['M', 'F']),
            nrOrdem: casual.numerify('#######'),
            siglaQuadro: 'SG',
            nomeQuadro: 'Quadro',
            siglaPosto: 'SG',
            nomePosto: 'Posto',
            siglaEspecialidade: 'SG',
            nomeEspecialidade: 'Especialidade',
            identidadeCivil: casual.numerify('##########'),
            identidadeMilitar: casual.numerify('#########'),
            passaporte: casual.numerify('#########'),
            situacao: casual.random_element(['ATIVO', 'TTC', 'VETERANO']),
            raca: 'raca',
            altura: '174',
            peso: '200',
            contatoPrincipal: casual.phone,
            contatoSecundario: casual.phone,
            email: casual.email,
            estadoCivil: 'estado civil',
            endereco: casual.endereco,
            organizacao: casual.organizacao,
        }
    });


    const data = { pessoas: [] }
    // Create 1000 users
    for (let i = 0; i < 10; i++) {
        data.pessoas.push(casual.pessoa(i))
    }
    return data
}