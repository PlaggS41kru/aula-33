class Video {
    constructor(id, titulo, descricao){
        this.id = gerarid();{
            const data = {
                usuarios: [
                    {
                      id: 1,
                      nome: "Brenda Verbena",
                      imagem: null,
                      email: "brenda@example.com",
                      papel: "usuarioDono"
                    },
                    {
                      id: 2,
                      nome: "Adrya Leal",
                      imagem: null,
                      email: "adrya@example.com",
                      papel: "usuarioDono"
                    },
                    {
                      id: 3,
                      nome: "Gabrieli Laurenço",
                      imagem: null,
                      email: "gabrieli@example.com",
                      papel: "usuarioDono"
                    },
                    {
                      id: 4,
                      nome: "PrismaTech Films",
                      imagem: null,
                      email: "prismatech@example.com",
                      papel: "usuarioDono"
                    },
                    {
                      id: 5,
                      nome: "Lara Cristina",
                      imagem: null,
                      email: "lara@example.com",
                      papel: "usuarioDono"
                    }
                  ],
                canais: [
                    {
                        id: 1,
                        nome: "Canal de Brenda Verbena",
                        videos: [1],
                        dono: 1
                      },
                      {
                        id: 2,
                        nome: "Canal de Adrya Leal",
                        videos: [2],
                        dono: 2
                      },
                      {
                        id: 3,
                        nome: "Canal de Gabrieli Laurenço",
                        videos: [3],
                        dono: 3
                      },
                      {
                        id: 4,
                        nome: "Canal PrismaTech Films",
                        videos: [4, 6],
                        dono: 4
                      },
                      {
                        id: 5,
                        nome: "Canal de Lara Cristina",
                        videos: [5],
                        dono: 5
                      }
                ],
                videos: [
                    {
                        "id": 1,
                        "titulo": "Corrupted - Os Quatro Cavaleiros",
                        "descricao": "2 mil visualizações • há 8 dias",
                        "quantidadeViews": 2000,
                        "image": "/images/brenda-verbena.jpg",
                        "canalID": 1
                      },
                      {
                        "id": 2,
                        "titulo": "Caos da Existência - A humanização do inexistente",
                        "descricao": "3 mil visualizações • há 12 dias",
                        "quantidadeViews": 3000,
                        "image": "/images/caos-da-existencia.jpg",
                        "canalID": 2
                      },
                      {
                        "id": 3,
                        "titulo": "Uma Casa do Horror",
                        "descricao": "1 mil visualizações • há 5 dias",
                        "quantidadeViews": 1000,
                        "image": "/images/casa-do-horro.jpg",
                        "canalID": 3
                      },
                      {
                        "id": 4,
                        "titulo": "Coisas Estranhas",
                        "descricao": "10 mil visualizações • há 14 dias",
                        "quantidadeViews": 10000,
                        "image": "/images/coisas-estranhas.jpg",
                        "canalID": 4
                      },
                      {
                        "id": 5,
                        "titulo": "Em Busca do Amor",
                        "descricao": "7 mil visualizações • há 11 dias",
                        "quantidadeViews": 7000,
                        "image": "/images/lara-cristina.jpg",
                        "canalID": 5
                      },
                      {
                        "id": 6,
                        "titulo": "Provas - Um crime em paris",
                        "descricao": "14 mil visualizações • há 11 dias",
                        "quantidadeViews": 14000,
                        "image": "/images/provas-um-crime-em-paris.jpg",
                        "canalID": 4
                      }
                ]
            };
        }
    }
}
module.exports = Video ;
