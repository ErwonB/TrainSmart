import {Exo} from "../entities/Exo";
import {Resolver, Query, Ctx, UseMiddleware} from "type-graphql";
import {MyContext} from "../types";
import {isAuth} from "../middleware/isAuth";
import {getConnection} from "typeorm";

@Resolver(Exo)
export class ExoResolver {

    @Query(() =>  [Exo], { nullable: true })
    @UseMiddleware(isAuth)
    async exo(@Ctx() { req }: MyContext) {

        const replacement: any[] = [req.session.userId]
        const exosInfo: Exo[] = await getConnection().query(
            `select e.* from Exo e
             where e."langCd" = (select lang_cd from profile
             where id = $1);
             `, replacement
             );

        return exosInfo
    }

}
