import { CreatereptileDto } from './Dto/controller-reptile.dto';
export declare class ReptileController {
    creat(): string;
    create(createreptiledto: CreatereptileDto): Promise<string>;
    update(id: string, createreptiledto: CreatereptileDto): string;
    remove(id: string): string;
}
