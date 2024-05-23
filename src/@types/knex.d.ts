// eslint-disable-next-line
import { Knex } from 'knex'

/* Sobreescrita de metodosnativos do knex para retornar a tipagem de dados
 da tabela do db, nesse caso somente esses dados pode ser definido */
declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
