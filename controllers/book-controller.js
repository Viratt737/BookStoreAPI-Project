const Book = require('../Models/book')

const getAllBooks = async (req, res)=>{
   try{
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({
                success:true,
                msg: 'list of all book given !!',
                data: allBooks,
            })
        }else{
            res.status(404).json({
                msg:"boook is not presnet in database !!",
            })
        }
   }catch(err){
    console.log(err);
   }
}

const getSingleBooksById = async (req, res)=>{
   try{
      const singleBook = req.params.id;
      const bookDetails = await Book.findById(singleBook);

      if(!bookDetails){
        return res.status(404).json({
            msg: "book is not present !!",
        });
      }
      res.status(200).json({
        success:true,
        data:bookDetails,
      });
   }catch(err){
       console.log(err);
   }
}

const addNewBooks = async (req, res)=>{
  try{
       const newBookFromData = req.body;
       const newlyCreatedBook = await Book.create(newBookFromData);
       if(newlyCreatedBook){
        res.status(201).json({
            success : true,
            msg: "successfuly created !!",
            data : newBookFromData
        });
       }
  }catch(err){
    console.log(err);
  }
}

const updateBooks = async (req, res)=>{

}

const deleteBooks = async (req, res)=>{

}

module.exports ={ getAllBooks, getSingleBooksById, addNewBooks, updateBooks, deleteBooks};