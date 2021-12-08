import excuteQuery from '../../../libs/db';

export default async (req, res) => {
    
    //console.log(req);
    //console.log(res);

    try {
        let result = await excuteQuery({
            query: 'SELECT * FROM homema where idx = ?',
            values: 1,
        });
        //return result[0];
        res.status(200).json( result )
    } catch (error) {
        console.log(error);
    }

    
}