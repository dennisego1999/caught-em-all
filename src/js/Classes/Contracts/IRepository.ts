export default interface IRepository<T> {
  findById(id: number): Promise<T>;
}
