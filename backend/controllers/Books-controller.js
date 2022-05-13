const Book = require('../models/Book');

const getAllBooks = async (req,res,next) =>{
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err)
    }
    if(!books){
        res.status(400).json({message:"No products found"})
    }
    return res.status(200).json({ books })
}

const addBook =async(req,res,next) =>{
   const {name,author,description,price,available,image} = req.body
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
        console.log("Book saved")
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(500).json({message:"Unable to Add"})
    }
    return res.status(201).json({book})
}

const getById = async (req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"No book found"})
    }
    return res.status(200).json({ book })
}

const UpdateBook = async (req,res,next) =>{
    const {name,author,description,available,price,image} = req.body
    const id = req.params.id
    let book;
    try{
        book = Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            available,
            price,
            image
        });
        book = await book.save()
    }
  
    catch(err){
        console.log(err);

    }
    if(!book){
      return  res.status(404).json({message:"Unable to update"})
    }
    return res.status(200).json({book});
 
}

const deleteBook = async(req,res,next) =>{

    const id = req.params.id;
    let book;
    try{
        book = Book.findByIdAndRemove(id);
    }catch(err){
        console.log(err)
    }
   if (!book){
        return res.status(404).json({message:"Unable to delete"})
    }
    return res.status(200).json("Book deleted");

}
exports.getAllBooks = getAllBooks;
exports.addBook=addBook;
exports.getById=getById;
exports.UpdateBook=UpdateBook;
exports.deleteBook=deleteBook;