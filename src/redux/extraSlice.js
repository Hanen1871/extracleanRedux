import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    Extralist:[
      {
        description: " Netoyage à vitre" ,
        prix: "95 dt",
        rating:"5",
        image :"https://ailuda.lt/wp-content/uploads/2024/05/20230906_175642-edited-scaled.webp",
         },
        
        {
        description: " Netoyage à vitre" ,
        prix: "105 dt",
        rating:"3",
        image:"https://www.santistaservicos.com.br/terceirizado/imagens/lavagem-fachada-de-predio-preco.jpg",  
              },
         {  
        description: "Netoyage à vapeur" ,        
        rating:"4",
        prix: "95 dt",
        image:"https://www.maison-travaux.fr/wp-content/uploads/sites/8/2017/04/comment-depanner-un-nettoyeur-vapeur.jpg", 
        },
        
        {
            image:"https://th.bing.com/th/id/R.df14d24c906943cb4207268ba08af05d?rik=DMHUxBbIZmVjtg&pid=ImgRaw&r=0",
            description: "depoussierage de filtre du climatiseur" ,
            prix: "30 dt",
            rating:"3",

                },
            
            {
            image:"https://climabionet.com/wp-content/uploads/2023/06/meilleur-service-de-nettoyage-de-climatiseur-1080x675.jpg",  
            description: "depoussierage de filtre du climatiseur" ,
            prix: "95 dt",
            rating:"4",

                        },
        
             {  
            image : "https://www.senemarket.sn/storage/files/sn/3617/thumb-816x460-fcd92fab32683f4cb58c7b01c65f7470.jpg",  
            description: "Désinfection dératisation " ,
            prix: "95 dt",
            rating:"3",

            },
        
            {
                image:"https://i.pinimg.com/736x/16/1c/db/161cdbf86449559aa77a2159e8463dc5.jpg",
                description: " Désinfection" ,
                prix: "100 dt",
                rating:"4",
                    },
                
                {
                
                image:"https://contact-nettoyage.com/wp-content/uploads/2023/07/Design-sans-titre-1-1024x683.jpg",  
                description: " Nettoyage à vapeur " ,
                rating:"5",
                prix: "115 dt",
                            },
                 {  
                image:"https://th.bing.com/th/id/R.bb597cb6879509b42122e5376ec8f026?rik=GCS%2fQRzuhrBoRw&riu=http%3a%2f%2fharveyenviro.co.uk%2fwp-content%2fuploads%2f2021%2f12%2fpest-control-harveys.jpg&ehk=bHo4%2f7nrGMzKyianzfQkr18wkvKM3Nst%2b5CGUh%2foHu0%3d&risl=&pid=ImgRaw&r=0",  
                description: "Désinfection" ,
                rating:"3",
                prix: "95 dt",
                },
                {
                    image:"https://www.gsp.ma.pixels.ma/wp-content/uploads/2018/12/slide1.jpg",
                    description: "Nettoyage sols " ,
                    rating:"4",
                    prix: "80 dt",
                        },
                    
                    {
                    
                    image:"https://th.bing.com/th/id/OIP.EswtvlrRE5FtPr9AtSaUhwHaE7?w=650&h=433&rs=1&pid=ImgDetMain",  
                    description: "Nettoyage sols " ,
                    rating:"5",
                    prix: "110 dt",
                                },
                     {  
                     
                    image:"https://static.wixstatic.com/media/b849fe_472d124ccf124a40892a2ef4625cd3d5~mv2.jpg/v1/fill/w_274,h_305,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b849fe_472d124ccf124a40892a2ef4625cd3d5~mv2.jpg",  
                    description: "Nettoyage sols" ,
                    rating:"5",
                    prix: "85dt",
                    }        
        ]
};

export const extraSlice = createSlice({
  name: 'extra',
  initialState,
  reducers: {

   addextra: (state, action) => {
     state.Extralist.push(action.payload)
    },
    editextra: (state, action) => {
        let i =state.Extralist.findIndex((el)=>el.id===action.payload.id);
        state.Extralist[i]=action.payload.edited
       },
  },
})

export const { addextra, editextra} = extraSlice.actions

export default extraSlice.reducer