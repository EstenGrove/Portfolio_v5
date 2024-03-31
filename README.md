# Portfolio v5

My revamped developer portfolio with a new look and feel along with added functionality.

---

## Database Info

<details>
  <summary>Analytics - Visitor Log Table</summary>

```sql
CREATE TABLE visitor_log (
	log_id SERIAL PRIMARY KEY,
	page_route VARCHAR(200) NOT NULL,
	origin VARCHAR(500) NOT NULL,
	referrer VARCHAR(500),
	user_agent VARCHAR(500),
	user_ip INET,
	languages VARCHAR(500),
	locale VARCHAR(100),
	timezone_name VARCHAR(500),
	timezone_offset INTEGER NOT NULL,
	created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
```

</details>
