import  {GraphQLFormattedError} from "graphql";

type Error = {
    message: String;
    statusCode: string;
}


const customFecth = async (url: string, options: RequestInit) => {
  const accsessTonken = localStorage.getItem("access_token");

  const headers = options.headers as Record<string, string>;
  return await fetch(url, {
    ...options,
    headers: {
      Autorization: headers?.Autorization || `Bearer ${accsessTonken}`,
      " Content-Type": "application/json",
      "Apollo-Require-Preflight": "true",
    },
  });
};

const getGraphQLErrors = (
  body: Record<"errors", GraphQLFormattedError[] | undefined>
): Error | null => {

    if(!body){
        return{
            message: 'Unknown error',
            statusCode: " INTERNAL_SERVER_ERROR"
        }
    }

    if("error" in body){
        const errors = body?.errors;
        
        const messages = errors?.map((errors)=>errors?.message)?.join("");
        const code = errors?.[0]?.extensions?.code;

        return{
            message: messages || JSON.stringify(errors);
            statusCode: code || 500
        }
    }
    return null; 
};
