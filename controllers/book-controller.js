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

// const updateBooks = async (req, res)=>{
//   try{
//     const getUpadteBookBYBody = req.body;
//     const getUpdateBookByID = req.params.id;
//     const getUpdateBookDetail = await Book.findByIdAndUpdate(getUpdateBookByID, getUpadteBookBYBody, 
//       {
//         new : true,
//       }
//     );
//     if(!getUpdateBookDetail){
//       return res.status(404).json({
//           success:false,
//           msg: "which book you wnat fro update not found !!",
//       });
//     }
//     else{
//       res.status(200).json({
//         success:true,
//         data : getUpdateBookDetail,
//       });
//     }
//   }catch(err){
//      console.log(err);
//   }
  
// }

const updateBooks = async (req, res) => {
  try {
    const updateData = req.body;
    const bookId = req.params.id;

    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      updateData,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        msg: "The book you want to update was not found!",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedBook,
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};


const deleteBooks = async (req, res) => {
  try {
    const getCurrentBook = req.params.id;

    const getCurrentBookDetails = await Book.findByIdAndDelete(getCurrentBook);

    if (!getCurrentBookDetails) {
      return res.status(404).json({
        success: false,
        msg: "current book not found !!",
      });
    }

    return res.status(200).json({
      success: true,
      data: getCurrentBookDetails,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "internal server error",
    });
  }
};


module.exports ={ getAllBooks, getSingleBooksById, addNewBooks, updateBooks, deleteBooks};