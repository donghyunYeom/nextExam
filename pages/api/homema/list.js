import excuteQuery from '../../../libs/db';

export default async (req, res) => {
    
    //console.log(req);
    //console.log(res);
    const keyword = req.body.keyword;
    console.log(keyword);

    
    try {
        var query = "";
        if(keyword == undefined){
            query = `SELECT * FROM homema`;
        }else{
            query = `SELECT * FROM homema where name like('%${keyword}%') || nameKo like('%${keyword}%')`;
        }
        let result = await excuteQuery({
            query: query,
            //values: 1,
        });
        //return result[0];
        res.status(200).json( result )
    } catch (error) {
        console.log(error);
    }

    
}