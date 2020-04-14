import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(request, response) {
    const schema = Yup.object().shape(
      {
        name: Yup.string().required(),
        street: Yup.string(). required(),
        number: Yup.number().required(),
        complement: Yup.string(),
        state: Yup.string().required(),
        city: Yup.string().required(),
        zipcode: Yup.string().required()
       }
    )
    try {
      if(!(await schema.isValid(request.body))){
        return response.status(400).json({ error: 'Validation fails'});
      };
      const recipient = await Recipient.create(request.body);

      return response.json(recipient);
    }catch(error){
      return response.status(400).json({error: error.message});
    }

  }
}

export default new RecipientController;
