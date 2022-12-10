import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';

interface Props {
  formData: any;
  handleChange: React.ChangeEventHandler<any>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const FormComp = ({ formData, handleChange, handleSubmit }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full sm:w-2/3 lg:w-1/2">
        <Typography variant="h2" className="text-center text-gray-900 mb-[30px]">
          Describe an Image
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <Input color="indigo" label="Enter Text" name="prompt" value={formData.prompt} onChange={handleChange} autoComplete="off" autoFocus required />
          </div>
          <div className="mb-6">
            <select className="form-select" name="size" onChange={handleChange} defaultValue={formData.size}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <Button type="submit" color="indigo" variant="gradient" fullWidth>
            Generate Image
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormComp;
