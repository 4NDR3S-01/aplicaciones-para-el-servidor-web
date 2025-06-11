import { TodoDatasource } from '../../domain';
import { TodoDatasourceImpl } from './todo.datasource.impl';
import { TodoTypeOrmDatasourceImpl } from './todo.typeorm.datasource.impl';
import { TodoMemoryDatasourceImpl } from './todo.memory.datasource.impl';

export enum DatasourceType {
    PRISMA = 'prisma',
    TYPEORM = 'typeorm',
    MEMORY = 'memory'
}

// Datos de ejemplo para inicializar el datasource de memoria
const SAMPLE_TODOS = [
    {
        id: 1,
        text: 'Completar el proyecto de arquitectura limpia',
        completedAt: null
    },
    {
        id: 2,
        text: 'Implementar tests unitarios',
        completedAt: new Date('2024-01-15')
    },
    {
        id: 3,
        text: 'Documentar la API',
        completedAt: null
    },
    {
        id: 4,
        text: 'Revisar el código con el equipo',
        completedAt: new Date('2024-01-10')
    }
];

export class DatasourceConfig {
    private static instance: TodoDatasource;

    static getDatasource(type: DatasourceType = DatasourceType.PRISMA): TodoDatasource {
        if (!this.instance) {
            this.instance = this.createDatasource(type);
        }
        return this.instance;
    }

    static setDatasource(type: DatasourceType): void {
        this.instance = this.createDatasource(type);
    }

    /**
     * Crea un nuevo datasource de memoria con datos opcionales
     */
    static createMemoryDatasource(initialData?: any[]): TodoMemoryDatasourceImpl {
        return new TodoMemoryDatasourceImpl(initialData || SAMPLE_TODOS);
    }

    /**
     * Crea un datasource de memoria vacío
     */
    static createEmptyMemoryDatasource(): TodoMemoryDatasourceImpl {
        return new TodoMemoryDatasourceImpl([]);
    }

    private static createDatasource(type: DatasourceType): TodoDatasource {
        switch (type) {
            case DatasourceType.TYPEORM:
                return new TodoTypeOrmDatasourceImpl();
            case DatasourceType.MEMORY:
                return this.createMemoryDatasource();
            case DatasourceType.PRISMA:
            default:
                return new TodoDatasourceImpl();
        }
    }

    /**
     * Obtiene el tipo de datasource actual
     */
    static getCurrentDatasourceType(): string {
        if (this.instance instanceof TodoMemoryDatasourceImpl) {
            return 'MEMORY';
        } else if (this.instance instanceof TodoTypeOrmDatasourceImpl) {
            return 'TYPEORM';
        } else {
            return 'PRISMA';
        }
    }
} 