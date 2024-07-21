import { TryCatch } from "../midddlewares/error";
import { transformSheetData } from "../utils/filter-data";
import ErrorHandler from "../utils/utility-class";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveGoogleSheetToDB = TryCatch(async (req, res, next) => {
  const rawData = req.body;
  // Extract the sheet data and store it in db
  const transformedData = transformSheetData(rawData);
  if (!transformedData) {
    return next(new ErrorHandler("Invalid data", 400));
  }

  // Store in DB
  const announcementArray = transformedData.announcement 

  for(const anno in announcementArray){
    await prisma.announcement.create({
      data:{
        description:anno
      }
    })
  }

  const linkArray= transformedData.googleSlideLink

  for(const link  in linkArray){
    await prisma.link.create({
      data:{
        link:link
      }
    })
  }

  





  console.log(transformedData);

  return res.status(200).json({
    message: "Data stored successfully",
    data: transformedData,
  });
});
