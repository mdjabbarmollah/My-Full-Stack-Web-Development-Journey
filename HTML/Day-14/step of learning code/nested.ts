type objected = {
  school?: string,
  college:string
}

type objects = {
  name: string;
  address: string;
  student: number;
  'events 1971': (string | number)[];
  regulatory: {
    principal: {
      name: string;
      yearsoffexperience: number;
      degree: string;
      ismarried: boolean,
      educationalhistoryofcollege:objected[]
    }
  }
}

const biodata2 = {
  name: 'vnc',
  address: 'baily road',
  student: 443,
 'events 1971': ['16 december bijoy dibos', '21 independeceday', 1971],
  regulatory: {
    principal: {
      name: 'abdur rajjak',
      yearsoffexperience: 25,
      degree: 'Graduate from japan group of subject human resource management',
      ismarried: true,
      educationalhistoryofcollege: [
        { school: 'sadipur', college: 'eyasin college' },
        { college: 'faridpur city college' }
        
      ]
    }
  }
}

// console.log(college.regulatory.pricipal.educationalhistoryofcollege);
const findoutelement2 = (college: objects)
  //(string|number)[]
  : string => {
  let fouroutput = (college.regulatory.principal.educationalhistoryofcollege[0].
    //বাংলায় নাম ও পরিচয় (Bangla Meaning & Usage)
// কোডে ব্যবহৃত ?? চিহ্নটিকে বলা হয় Nullish Coalescing Operator (নালিশ কোয়ালেসিং অপারেটর)।

// এটি কী কাজ করে?
// এটি মূলত একটি বিকল্প (Fallback) মান সেট করার জন্য ব্যবহার করা হয়।

// চিহ্নটির বাম পাশের মান যদি null অথবা undefined হয়, কেবল তখনই এটি ডান পাশের মানটি গ্রহণ করবে।
    school ?? 'not found');
  //// let fouroutput = (college.regulatory.principal.educationalhistoryofcollege[0].school ?? 'not found');
  // let fouroutput = college["events 1971"].toString()//string return korte caile kora jabe to to string method use korte hobe noito kintu array return korte hobe ekhon array return korbo
  // let fouroutput = college["events 1971"]
  return fouroutput;
  
};
// console.log(findoutelement2(biodata2))
console.log(Object.entries(findoutelement2(biodata2)))
