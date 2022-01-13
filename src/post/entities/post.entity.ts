import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar',  length: 40})
    name: string;
    @Column({ type: 'varchar',  length: 40})
    phone_number: string;
    @Column({ type: 'varchar',  length: 40})
    address: string;
    @Column({ type: 'varchar',  length: 40})
    user: string;
}