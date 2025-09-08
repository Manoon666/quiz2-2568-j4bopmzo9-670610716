import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState(false);
  const [price, setPrice] = useState<number | string>(0);
  const [namePrice, setPriceError] = useState(false);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {};
  
    const inputname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameError(false);
    setName(event.target.value);
  };
  
    const inputprice = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPriceError(false);
    setPrice(event.target.value);
      };


  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return {
    /* Type additional text here. */
  };
}
