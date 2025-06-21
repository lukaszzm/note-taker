import { Alert, AlertDescription } from "@/components/ui/alert";

export function TestAccount() {
  return (
    <Alert>
      <AlertDescription>
        <span>
          <strong>Email: </strong>
          test@test.com
        </span>
        <span>
          <strong>Password: </strong>
          testtest
        </span>
      </AlertDescription>
    </Alert>
  );
}
