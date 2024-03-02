export interface IDepartment {
  id: number;
  name: string;
  employees: Employee[];
}

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
}
