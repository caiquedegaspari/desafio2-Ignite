import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;

  name: string;

  admin?: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;
  constructor() {
    if (!this.id) {
      console.log("NO ID YET");
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
