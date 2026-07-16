using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace ClaimsApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClaimsController : ControllerBase
{
    private readonly IHubContext<NotificationHub> _hubContext;

    public ClaimsController(IHubContext<NotificationHub> hubContext)
    {
        _hubContext = hubContext;
    }

    [HttpPost]
    public async Task<IActionResult> CreateClaim([FromBody] ClaimRequest request)
    {
        // Simulate processing
        var claim = new { Id = Guid.NewGuid(), Status = "Processing", ...request };

        // Real-time notification
        await _hubContext.Clients.All.SendAsync("ClaimUpdated", claim);

        return Ok(new { message = "Claim created successfully", claimId = claim.Id });
    }
}

// Simple Hub for Real-time
public class NotificationHub : Hub
{
    // SignalR hub for real-time updates
}
