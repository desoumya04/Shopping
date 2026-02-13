import { sellerService } from "../service/seller.service.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { JWTProviderInstance } from "../utils/jwtProvider.js";



class SellerController {
  
  createSeller = asyncHandler(async (req,res) =>{

    const seller = await sellerService.createsSeller(req.body);
    
  res
  .status(201)
  .cookie('token',seller.token, JWTProviderInstance.cookieOptions())
  .json(
    new apiResponse(201,seller,'Seller created successfully')
  )

  })


  // updateSeller
  // deleteSeller
  //get all sellers
  getSeller = asyncHandler(async (req,res) =>{
    const seller = await sellerService.getSeller(req.body.email);

  })
  
  
  // add business details
  addBusinessDetails = asyncHandler(async (req,res) =>{
    const businessDetails = await sellerService.addBusinessDetails(req);
    res
    .status(200)
    .json(
      new apiResponse(200, businessDetails, 'Business details added successfully')
    );

  })


  // add bank details
  addBankDetails = asyncHandler(async (req,res) =>{
    const bankDetails = await sellerService.addBankDetails(req);
    
    res
    .status(200)
    .json(
      new apiResponse(200, bankDetails, 'Bank details added successfully')
    );
  })
}

export const sellerController = new SellerController();