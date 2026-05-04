
CREATE OR REPLACE FUNCTION public.validate_contact_submission()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF length(NEW.company) > 200 OR length(NEW.name) > 100 OR length(NEW.email) > 320
     OR coalesce(length(NEW.phone),0) > 50 OR coalesce(length(NEW.category),0) > 200
     OR length(NEW.message) > 5000 THEN
    RAISE EXCEPTION 'Field length exceeds allowed limit';
  END IF;
  IF NEW.email !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' THEN
    RAISE EXCEPTION 'Invalid email';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER trg_validate_contact_submission
BEFORE INSERT ON public.contact_submissions
FOR EACH ROW EXECUTE FUNCTION public.validate_contact_submission();
