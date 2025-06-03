import { User } from './models/user'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { View } from './models/view';

export const AppDataSource = new DataSource(
    {
        type: "sqlite",
        database: 'database.sqlite',
        synchronize: true,
        logging: true,
        entities: [User, View],
        migrations: [],
        subscribers: []
    }
);