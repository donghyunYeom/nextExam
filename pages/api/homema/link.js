import excuteQuery from '../../../libs/db';
import { useRouter } from "next/router"


try {
    let result = await excuteQuery({
        query: `SELECT discord FROM homema where idx = ?`,
        values: 1,
    });
    //return result[0];
    res.status(200).json( result )
} catch (error) {
    console.log(error);
}

